import { FindUserUseCase } from '../../src/application/user/use-case/find-user.use-case';
import { User } from '../../src/domain/user/entities/user.entity';

const mockUserRepository = {
  findById: jest.fn(),
  findByEmail: jest.fn(),
};

const mockUser = {
  id: '2dcd5895-49d1-458f-99f2-f476d213a99c',
  name: 'Test User',
  email: 'test@test.com',
} as User;

describe('FindUserUseCase', () => {
  let useCase: FindUserUseCase;

  beforeEach(() => {
    jest.clearAllMocks();
    useCase = new FindUserUseCase(mockUserRepository as any);
  });

  it('should find by email', async () => {
    mockUserRepository.findByEmail.mockResolvedValue(mockUser);
    expect(mockUser).toEqual(await useCase.findByEmail('test@test.com'));
  });
});
