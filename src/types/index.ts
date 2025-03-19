export interface ProjectPropsTypes {
    id: string,
    label: string,
    link: string,
    githubLink: string | null,
    liveLink: string | null,
    overview: string,
    tags: string[],
    imageUrl: null | string,
    theme: null | string,
}

export interface SkillPropsTypes {
    id: string,
    label: string,
    icon: string,
}
