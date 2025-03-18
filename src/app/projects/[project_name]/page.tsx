export default async function Page({
    params,
}: {
    params: Promise<{ project_name: string }>
}) {
    const { project_name } = await params

    const { default: Project } = await import(`@/content/${project_name}.mdx`)

    return <Project />
}

export const dynamicParams = false