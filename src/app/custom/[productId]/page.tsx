'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { 
  Type, 
  Image as ImageIcon, 
  Plus, 
  Minus, 
  RotateCw, 
  Trash2,
  Save,
  Undo,
  Redo
} from 'lucide-react'
import { Product } from '@/types/product'
import { CustomizationElement } from '@/types/customization'

export default function CustomizationPage({ params }: { params: { productId: string } }) {
  const [selectedColor, setSelectedColor] = useState<string>('white')
  const [elements, setElements] = useState<CustomizationElement[]>([])
  const [selectedElement, setSelectedElement] = useState<string | null>(null)
  const [history, setHistory] = useState<CustomizationElement[][]>([[]])
  const [historyIndex, setHistoryIndex] = useState(0)
  
  const fileInputRef = useRef<HTMLInputElement>(null)
  const product = products.find(p => p.id === params.productId)

  if (!product) {
    return <div>Product not found</div>
  }

  const addText = () => {
    const newElement: CustomizationElement = {
      id: `text-${Date.now()}`,
      type: 'text',
      content: 'Double click to edit',
      position: { x: 50, y: 50 },
      scale: 1,
      rotation: 0,
      color: '#000000',
      font: 'Arial',
      fontSize: 24
    }
    addElement(newElement)
  }

  const addImage = (file: File) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const newElement: CustomizationElement = {
        id: `image-${Date.now()}`,
        type: 'image',
        content: e.target?.result as string,
        position: { x: 50, y: 50 },
        scale: 1,
        rotation: 0
      }
      addElement(newElement)
    }
    reader.readAsDataURL(file)
  }

  const addElement = (element: CustomizationElement) => {
    const newElements = [...elements, element]
    setElements(newElements)
    addToHistory(newElements)
  }

  const updateElement = (id: string, updates: Partial<CustomizationElement>) => {
    const newElements = elements.map(el => 
      el.id === id ? { ...el, ...updates } : el
    )
    setElements(newElements)
    addToHistory(newElements)
  }

  const removeElement = (id: string) => {
    const newElements = elements.filter(el => el.id !== id)
    setElements(newElements)
    addToHistory(newElements)
  }

  const addToHistory = (newElements: CustomizationElement[]) => {
    const newHistory = [...history.slice(0, historyIndex + 1), newElements]
    setHistory(newHistory)
    setHistoryIndex(newHistory.length - 1)
  }

  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1)
      setElements(history[historyIndex - 1])
    }
  }

  const redo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1)
      setElements(history[historyIndex + 1])
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Tools Panel */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Tools</h2>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={addText}
                className="flex items-center space-x-2 px-4 py-2 bg-ravion-primary text-white rounded-lg hover:bg-ravion-primary/90"
              >
                <Type size={20} />
                <span>Add Text</span>
              </button>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center space-x-2 px-4 py-2 bg-ravion-secondary text-white rounded-lg hover:bg-ravion-secondary/90"
              >
                <ImageIcon size={20} />
                <span>Add Image</span>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && addImage(e.target.files[0])}
              />
            </div>
          </div>

          {/* Color Selection */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Product Color</h2>
            <div className="flex flex-wrap gap-2">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-10 h-10 rounded-full border-2 ${
                    selectedColor === color
                      ? 'border-ravion-primary'
                      : 'border-transparent'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Element Properties */}
          {selectedElement && (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Properties</h2>
              <div className="space-y-4">
                {/* Element-specific controls */}
                {elements.find(el => el.id === selectedElement)?.type === 'text' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Text Color
                      </label>
                      <input
                        type="color"
                        value={elements.find(el => el.id === selectedElement)?.color || '#000000'}
                        onChange={(e) => updateElement(selectedElement, { color: e.target.value })}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Font Size
                      </label>
                      <input
                        type="range"
                        min="12"
                        max="72"
                        value={elements.find(el => el.id === selectedElement)?.fontSize || 24}
                        onChange={(e) => updateElement(selectedElement, { fontSize: parseInt(e.target.value) })}
                        className="w-full"
                      />
                    </div>
                  </>
                )}
                
                {/* Common controls */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Scale
                  </label>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        const element = elements.find(el => el.id === selectedElement)
                        if (element) {
                          updateElement(selectedElement, { scale: element.scale - 0.1 })
                        }
                      }}
                      className="p-2 rounded-lg border hover:border-ravion-primary"
                    >
                      <Minus size={16} />
                    </button>
                    <button
                      onClick={() => {
                        const element = elements.find(el => el.id === selectedElement)
                        if (element) {
                          updateElement(selectedElement, { scale: element.scale + 0.1 })
                        }
                      }}
                      className="p-2 rounded-lg border hover:border-ravion-primary"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Rotation
                  </label>
                  <button
                    onClick={() => {
                      const element = elements.find(el => el.id === selectedElement)
                      if (element) {
                        updateElement(selectedElement, { rotation: element.rotation + 90 })
                      }
                    }}
                    className="p-2 rounded-lg border hover:border-ravion-primary"
                  >
                    <RotateCw size={16} />
                  </button>
                </div>

                <button
                  onClick={() => removeElement(selectedElement)}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  <Trash2 size={16} />
                  <span>Delete Element</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Preview Area */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="relative aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
              {/* Product Base Image */}
              <div className="absolute inset-0" style={{ backgroundColor: selectedColor }} />
              
              {/* Customization Elements */}
              {elements.map(element => (
                <div
                  key={element.id}
                  className={`absolute cursor-move ${
                    selectedElement === element.id ? 'ring-2 ring-ravion-primary' : ''
                  }`}
                  style={{
                    left: `${element.position.x}%`,
                    top: `${element.position.y}%`,
                    transform: `
                      translate(-50%, -50%)
                      scale(${element.scale})
                      rotate(${element.rotation}deg)
                    `
                  }}
                  onClick={() => setSelectedElement(element.id)}
                >
                  {element.type === 'text' ? (
                    <div
                      contentEditable
                      suppressContentEditableWarning
                      style={{
                        color: element.color,
                        fontFamily: element.font,
                        fontSize: element.fontSize
                      }}
                      onBlur={(e) => updateElement(element.id, { content: e.target.textContent || '' })}
                    >
                      {element.content}
                    </div>
                  ) : (
                    <img
                      src={element.content}
                      alt="Custom element"
                      className="max-w-[200px] max-h-[200px]"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between mt-6">
            <div className="flex space-x-2">
              <button
                onClick={undo}
                disabled={historyIndex === 0}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50"
              >
                <Undo size={20} />
              </button>
              <button
                onClick={redo}
                disabled={historyIndex === history.length - 1}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50"
              >
                <Redo size={20} />
              </button>
            </div>
            <button
              className="flex items-center space-x-2 px-6 py-2 bg-ravion-primary text-white rounded-lg hover:bg-ravion-primary/90"
            >
              <Save size={20} />
              <span>Save Design</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const products: Product[] = [
  // Same sample products as before
] 