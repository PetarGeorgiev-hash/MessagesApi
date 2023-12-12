import { MessagesRepository } from './message.repository';

export class MessagesService {
  repo: MessagesRepository;
  constructor() {
    this.repo = new MessagesRepository();
  }

  findOne(id: string) {
    return this.repo.findOne(id);
  }
  findAll() {
    return this.repo.findAll();
  }
  create(content: string) {
    return this.repo.create(content);
  }
}
