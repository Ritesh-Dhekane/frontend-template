export default function CheckoutSteps({ currentStep }: { currentStep: number }) {
  const steps = [
    { number: 1, name: 'Shipping' },
    { number: 2, name: 'Delivery' },
    { number: 3, name: 'Payment' }
  ]

  return (
    <div className="flex justify-center">
      <div className="flex items-center space-x-4">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                currentStep >= step.number
                  ? 'bg-ravion-primary text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {step.number}
            </div>
            <span
              className={`ml-2 ${
                currentStep >= step.number
                  ? 'text-ravion-primary font-medium'
                  : 'text-gray-500'
              }`}
            >
              {step.name}
            </span>
            {index < steps.length - 1 && (
              <div className="w-12 h-px mx-4 bg-gray-300" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
} 