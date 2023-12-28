export interface CreateTableUseCase {
    execute: (options: CreateTableOptions) => string;
};

export interface CreateTableOptions {
    base: number;
    limit?: number;
};


export class CreateTable implements CreateTableUseCase {

    constructor() { };

    execute({ base, limit = 10 }: CreateTableOptions) {

        const headerMessage = `
        =================================
                Tabla del ${base}
        =================================\n`;

        let outputMessage: string = '';

        for (let i = 0; i <= limit; i++) {
            outputMessage += `${base} X ${i} = ${base * 1}\n`;
        };
        return outputMessage = headerMessage + outputMessage;
    };
};