import { User } from '../../src/domain/user/entities/user.entity';
import { Account } from '../../src/domain/account/entities/account.entity';
import {
  CreateUserInput,
  CreateUserUseCase,
} from '../../src/application/user/use-case/create-user.use-case';

// Mocks
const mockUserRepository = {
  create: jest.fn(),
};

const mockHashGenerator = {
  hash: jest.fn(),
};

describe('CreateUserUseCase', () => {
  let useCase: CreateUserUseCase;

  beforeEach(() => {
    jest.clearAllMocks(); // limpa mocks entre testes
    useCase = new CreateUserUseCase(
      mockUserRepository as any,
      mockHashGenerator as any,
    );
  });

  it('should hash the password and create a user', async () => {
    const input: CreateUserInput = {
      name: 'Alice',
      email: 'alice@example.com',
      password: 'plainPassword',
    };

    const mockAccount = new Account('account-123', 'BarberShop');

    const expectedHash = 'hashedPassword123';
    const expectedUser = new User(
      undefined,
      input.name,
      input.email,
      expectedHash,
      mockAccount.id!,
    );

    mockHashGenerator.hash.mockResolvedValue(expectedHash);
    mockUserRepository.create.mockResolvedValue(expectedUser);

    const result = await useCase.create(input, mockAccount);

    expect(mockHashGenerator.hash).toHaveBeenCalledWith('plainPassword');
    expect(mockUserRepository.create).toHaveBeenCalledWith(expectedUser);
    expect(result).toEqual(expectedUser);
  });
});
