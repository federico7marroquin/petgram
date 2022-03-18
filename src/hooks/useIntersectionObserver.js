import { useRef, useState, useEffect } from 'react'

export function useIntersectionObserver(){

    const elementContainer = useRef(null)
    const [isIntersected, setIsIntersected] = useState(false)
  
    useEffect(function () {
      Promise.resolve(typeof window.IntersectionObserver !== 'undefined'
      ? window.IntersectionObserver: import('intersection-observer'))
          .then(() => {
            const observer = new IntersectionObserver(function (entries) {
              const { isIntersecting } = entries[0]
              if (isIntersecting) {
                setIsIntersected(true)
                observer.disconnect()
              }
            })
      
            observer.observe(elementContainer.current)
          })

      
      },
      [elementContainer]
    )


    return [elementContainer, isIntersected]

}