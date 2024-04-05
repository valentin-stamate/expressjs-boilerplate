import {UserService} from "service/user.service";

describe('Demo service test', () => {
    test('sum of a and b should work', async () => {
        const result = await UserService.getUsers();

        expect(result).toEqual(12);
    });
});
