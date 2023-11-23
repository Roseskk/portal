
export function formatTimeFromTimestamp(timestamp: number): string {
    const date = new Date(timestamp * 1000); // Преобразуем timestamp в миллисекунды
    const hours = date.getHours().toString().padStart(2, '0'); // Получаем часы и добавляем ведущий ноль при необходимости
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Получаем минуты и добавляем ведущий ноль при необходимости
    return `${hours}:${minutes}`;
}

export function convertISOToDate(isoString: any) {
    const date = new Date(isoString);

    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();
    const day = date.getUTCDate();
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();

    return new Date(year, month, day, hours, minutes);
}

export function convertISOToTimeString(isoString: any) {
    const date = new Date(isoString);

    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();

    const addLeadingZero = (number: any) => number < 10 ? `0${number}` : number;

    // Форматируем часы и минуты с ведущим нулём при необходимости
    return `${addLeadingZero(hours)}:${addLeadingZero(minutes)}`;
}
