import React from "react";

interface DimensionProps {
  width: number
  height: number
}

const useWindowSize = (): DimensionProps => {
  const [dimensions, setDimensions] = React.useState<DimensionProps>({
    width: window.innerWidth,
    height: window.innerHeight
  })

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }
  React.useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  return { ...dimensions }
}

export default useWindowSize;