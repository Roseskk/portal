import moment from 'moment';
import 'moment/locale/ru'; // Импортируем локализацию для русского языка
import 'moment-timezone'; // Импортируем библиотеку для работы с временными зонами

moment.locale('ru'); // Устанавливаем русскую локализацию
moment.tz.setDefault('Europe/Moscow'); // Устанавливаем временную зону для Москвы
