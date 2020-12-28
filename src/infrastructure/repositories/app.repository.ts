import { Injectable } from "@angular/core";
import { UserRepository } from "./user.repository";
import { FileRepository } from "./file.repository";

@Injectable()
export class AppRepository {
    constructor(
        private fileRepository: FileRepository,
        private userRepository: UserRepository
    ) {

    }
    /**
     * Get instance of file repository
     */
    get File(): FileRepository {
        return this.fileRepository;
    }

    /**
     * Get instance of user repository
     */
    get User(): UserRepository {
        return this.userRepository;
    }
}