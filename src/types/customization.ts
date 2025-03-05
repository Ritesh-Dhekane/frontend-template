export interface CustomizationElement {
  id: string
  type: 'text' | 'image'
  content: string
  position: { x: number; y: number }
  scale: number
  rotation: number
  color?: string
  font?: string
  fontSize?: number
}

export interface CustomizationArea {
  id: string
  name: string
  width: number
  height: number
  position: { x: number; y: number }
  allowedTypes: ('text' | 'image')[]
}

export interface CustomizationTemplate {
  id: string
  name: string
  areas: CustomizationArea[]
  defaultElements?: CustomizationElement[]
} 