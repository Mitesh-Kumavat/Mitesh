import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => (
            <h1 className='text-blue-900 text-4xl'>{children}</h1>
        ),
        h2: ({ children }) => (
            <h2 className='text-blue-900 text-2xl'>{children}</h2>
        ),
        img: (props) => (
            <Image
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                {...(props as ImageProps)}
            />
        ),
        ...components,
    }
}