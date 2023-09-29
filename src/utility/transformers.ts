
export function formatTimeFromTimestamp(timestamp: number): string {
    const date = new Date(timestamp * 1000); // Преобразуем timestamp в миллисекунды
    const hours = date.getHours().toString().padStart(2, '0'); // Получаем часы и добавляем ведущий ноль при необходимости
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Получаем минуты и добавляем ведущий ноль при необходимости
    return `${hours}:${minutes}`;
}