export interface TaskInterface {
    id?: number;
    name: string;
    descriptionShort: string;
    descriptionLong: string;
    dateCreation: string;
    deadline: string;
    priority: number;
    status: number;
}

export interface SprintInterface {
    id?: number;
    name: string;
    tasks: Array<TaskInterface>
}

export interface NavbarInterface {
    title: string;
    icon: string;
    link: string
}

export interface PriorityInterface {
    id: number;
    name: string;
    color: string;
    icon: string
}

export interface StatusInterface {
    id: number;
    name: string;
    color: string;
    icon: string
}

export interface DraggableInterface {
    added: {
        newIndex: number,
        element: TaskInterface
    },
    removed: {
        oldIndex: number,
        element: TaskInterface
    },
    moved: {
        oldIndex: number,
        newIndex: number,
        element: TaskInterface
    },
}

export interface ItemBoardStatusInterface {
    status: boolean
}
export interface DecorationInterface {
    x: string,
    y: string,
    rotate: string,
    small: boolean,
    type: string,
}