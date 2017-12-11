import { Time } from "@angular/common/src/i18n/locale_data_api";

export class Task {
    constructor(
        public description: string = '',
        public createdAt: Date = new Date()
     ) {}

}