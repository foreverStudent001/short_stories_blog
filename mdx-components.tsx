import type { MDXComponents } from 'mdx/types'
import { CardBody, CardContainer, CardItem } from './components/ui/3d-card'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <CardContainer className='mb-30'>
        <CardBody className="relative group/card ">
          <CardItem translateZ="100" className="w-full mt-4">
          <img src={src} alt={alt} className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl" />
          </CardItem>
          <div
            className= "flex items-center justify-center"
          >
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {caption}
          </CardItem>
          </div>
          
        </CardBody>
      </CardContainer>
      )
    },
    TextStyle: ({ children, className }: { children: React.ReactNode; className?: string }) => (
      <div className={className}>
        {children}
      </div>
    ),
  }
}
