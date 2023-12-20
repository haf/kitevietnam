'use client'

export default function Button() {
  const handleClick = () => {
    async function execute() {
      const response = await fetch('/api/speak');
      const data = await response.json();
    }
    execute();
  }
  return (
    <button
      onClick={handleClick}
      className="border-2"
    >
      Call /api/speak
    </button>
  )
}