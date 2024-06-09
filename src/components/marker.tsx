import { LatLngLiteral } from 'google-maps-react-markers'
import React from 'react'

interface MarkerProps {
	className?: string
	draggable: boolean
	lat: number
	lng: number
    image?: string
	markerId: string
    label?: string
	onClick?: (
		e: React.MouseEvent<HTMLImageElement, MouseEvent>,
		props: { lat: number; lng: number; markerId: string },
	) => void
	onDrag?: (e: React.MouseEvent<HTMLImageElement, MouseEvent>, props: { latLng: LatLngLiteral }) => void
	onDragEnd?: (e: React.MouseEvent<HTMLImageElement, MouseEvent>, props: { latLng: LatLngLiteral }) => void
	onDragStart?: (e: React.MouseEvent<HTMLImageElement, MouseEvent>, props: { latLng: LatLngLiteral }) => void
}

const Marker = ({
	className,
    label,
	lat,
	lng,
	markerId,
	onClick,
	draggable,
	onDrag,
	onDragEnd,
	onDragStart,
    image,
	...props
}: MarkerProps) =>
	(
        <div className='bg-black p-2 px-4 text-white rounded-full hover:bg-white group relative z-20'>
            <p className='group-hover:text-black group-hover:cursor-pointer'>{label && label}</p>
            {/* <img className='absolute bottom-0 right-0 mx-auto z-10 hidden group-hover:block' src={image ? image : ""} alt="Image" height={50} width={150} /> */}
        </div>
    )

export default Marker