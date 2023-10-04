import { Button } from "@mui/material"
import { FC } from "react"
import { Slide } from "react-slideshow-image"

interface Props {
  images: string[]
}

export const DealSlideshow: FC<Props> = ({images}) => {
  return (
    <Slide
        easing="ease"
        duration={ 7000 }
        indicators={true}
        
    >
        {
            images.map( image =>  {
                return (
                    <div key={ image }>
                        <div style={{
                            backgroundImage: `url(${ image })`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            height: 400,
                            display: 'flex',
                            position: 'relative'
                        }}>
                            <Button
                                style={{
                                    position: 'absolute',
                                    bottom: 48,
                                    left: 48
                                }}
                            >
                                Comprar
                            </Button>
                        </div>
                    </div>
                )

            })
        }

    </Slide>
  )
}
