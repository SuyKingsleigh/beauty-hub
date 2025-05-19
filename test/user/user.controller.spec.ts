import { UserController } from '../../src/interfaces/user/user.controller';
import { Test, TestingModule } from '@nestjs/testing';
import {
  CreateUserInput,
  CreateUserUseCase,
} from '../../src/application/user/use-case/create-user.use-case';
import { User } from '../../src/domain/user/entities/user.entity';
import { FindUserUseCase } from '../../src/application/user/use-case/find-user.use-case';

const MOCK_CREATE_USER = {
  id: '9e61a2fd-8f29-4654-be01-15fb033397da',
  name: 'John Doe',
  email: 'johndoe@gmail.com',
};

const ADMIN_USER: User = {
  id: '86c54b26-cb2e-4f13-906c-2edfdabad050',
  name: 'admin',
  email: 'admin@gmail.com',
  passwordHash: '12345678',
  accountId: 'e4628a5b-c6f4-4d46-8533-5bee6f908c84',
};

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: CreateUserUseCase,
          useValue: {
            create: jest.fn().mockResolvedValue(MOCK_CREATE_USER),
          },
        },
        {
          provide: FindUserUseCase,
          useValue: {
            findByEmail: jest.fn().mockResolvedValue(ADMIN_USER),
            findById: jest.fn().mockResolvedValue(ADMIN_USER),
          },
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should return a created user', async () => {
    expect(
      await controller.create(
        {
          name: 'John Doe',
          email: 'johndoe@gmail.com',
          password: '123456',
        } as CreateUserInput,
        ADMIN_USER,
      ),
    );
  });
});
