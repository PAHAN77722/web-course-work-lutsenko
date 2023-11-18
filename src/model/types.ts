
export type Duty = {
    id: number;
    type: string;
    personnel: Serviceman[];
    unit: string;
    date: Date;
    mark: number;
    notations: string[]
}

export type Serviceman = {
    id: number;
    rank: string;
    name: string;
    surname: string;
}