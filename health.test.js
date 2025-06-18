import { getHealthStatus } from './health';

test('should return "healthy" for health > 50', () => {
    expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
});

test('should return "wounded" for health between 15 and 50', () => {
    expect(getHealthStatus({ name: 'Воин', health: 30 })).toBe('wounded');
});

test('should return "critical" for health < 15', () => {
    expect(getHealthStatus({ name: 'Лучник', health: 10 })).toBe('critical');
});