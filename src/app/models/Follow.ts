export class Follow {
    constructor(
        public userId: number,
        public userName : string,
        public emailId: string,
        public following : boolean,
        public followersCount : string
    ) {}
}
