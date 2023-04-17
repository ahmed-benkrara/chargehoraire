export interface Teachesreal{
    key: {
        teacher_id: number,
        module_id: number,
        year: {
            id: number,
            name: string
        }
    },
    semester: {
        id: number,
        name: string
    },
    session: {
        id: number,
        name: string
    },
    type: {
        id: number,
        name: string
    },
    hours: number
}