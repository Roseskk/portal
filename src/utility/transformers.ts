
export function formatTimeFromTimestamp(timestamp: number): string {
    const date = new Date(timestamp * 1000); // Преобразуем timestamp в миллисекунды
    const hours = date.getHours().toString().padStart(2, '0'); // Получаем часы и добавляем ведущий ноль при необходимости
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Получаем минуты и добавляем ведущий ноль при необходимости
    return `${hours}:${minutes}`;
}

export function convertISOToDate(isoString: any) {
    // Преобразование в объект Date
    const date = new Date(isoString);

    // Извлечение компонентов даты в UTC
    const year = date.getUTCFullYear(); // Год
    const month = date.getUTCMonth(); // Месяц (от 0 до 11)
    const day = date.getUTCDate(); // День
    const hours = date.getUTCHours(); // Часы
    const minutes = date.getUTCMinutes(); // Минуты

    // Создание и возвращение новой даты
    return new Date(year, month, day, hours, minutes);
}