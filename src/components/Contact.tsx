import { LucideProps } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Contact = ({ icon: Icon, handleClick, type, contact, link }: { icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>, handleClick?: () => void, type: string, contact: string, link?: string }) => {
    return (
        <>
            {!link ? (
                <div className='flex gap-2'>
                    <div className='bg-muted rounded-xl text-yellow-500 w-fit h-fit p-2 cursor-pointer' onClick={handleClick}>
                        <Icon size={25} />
                    </div>
                    <div>
                        <h4>{type}</h4>
                        <p className='text-xs text-muted-foreground'>{contact}</p>
                    </div>
                </div>
            ) : (
                <Link className='flex gap-2' to={link} target='_blank'>
                    <div className='bg-muted rounded-xl text-yellow-500 w-fit h-fit p-2 cursor-pointer'>
                        <Icon size={25} />
                    </div>
                    <div>
                        <h4>{type}</h4>
                        <p className='text-xs text-muted-foreground'>{contact}</p>
                    </div>
                </Link>
            )}
        </>
    )
}

export default Contact