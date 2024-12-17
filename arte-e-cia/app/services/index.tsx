"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Carrossel = ({ data }: { data: { image: string }[] }) => {
    // State and Ref initialization
    const [currentImg, setCurrentImg] = useState(0)
    const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
    const carouselRef = useRef(null)

    // useEffect to get the initial carousel size
    useEffect(() => {
        let elem = carouselRef.current as unknown as HTMLDivElement
        let { width, height } = elem.getBoundingClientRect()
        if (carouselRef.current) {
            setCarouselSize({
                width,
                height,
            })
        }
    }, [])

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            {/* Carousel container */}
            <div className='w-full max-w-4xl h-96 rounded-xl overflow-hidden shadow-xl bg-white relative'>
                {/* Image container */}
                <div
                    ref={carouselRef}
                    style={{
                        left: -currentImg * carouselSize.width
                    }}
                    className='w-full h-full absolute flex transition-all duration-500 ease-in-out'>
                    {/* Map through data to render images */}
                    {data.map((v, i) => (
                        <div key={i} className='relative shrink-0 w-full h-full'>
                            <Image
                                className='pointer-events-none object-contain'  // 'object-contain' to prevent cropping
                                alt={`carousel-image-${i}`}
                                fill
                                src={v.image || "https://random.imagecdn.app/500/500"}
                            />
                        </div>
                    ))}
                </div>
                
                {/* Navigation buttons */}
                <div className='absolute top-1/2 transform -translate-y-1/2 left-4 z-10'>
                    <button
                        disabled={currentImg === 0}
                        onClick={() => setCurrentImg(prev => prev - 1)}
                        className={`bg-white border-2 border-gray-400 text-gray-700 p-2 rounded-full hover:bg-gray-200 disabled:opacity-50 transition-colors`}
                    >
                        &lt;
                    </button>
                </div>
                <div className='absolute top-1/2 transform -translate-y-1/2 right-4 z-10'>
                    <button
                        disabled={currentImg === data.length - 1}
                        onClick={() => setCurrentImg(prev => prev + 1)}
                        className={`bg-white border-2 border-gray-400 text-gray-700 p-2 rounded-full hover:bg-gray-200 disabled:opacity-50 transition-colors`}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Carrossel
