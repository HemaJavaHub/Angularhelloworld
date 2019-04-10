import { Developer } from './developer';

describe('Developer', () => {
  it('should create an instance', () => {
    expect(new Developer(1,'test','test','hello',1898)).toBeTruthy();
  });
});
