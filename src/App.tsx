import React, { useState } from 'react';
// import analytics from '../public/analytics.png';
// import file from '../public/file.png';
// import users from '../public/users.png';
// import user from '../public/user.png';
// import box from '../public/box.png';
// import cog from '../public/cog.png';
// import search from '../public/search.png';
interface Ticket {
    id: string;
    title: string;
}

const tickets: Ticket[] = [
    { id: '50061', title: 'Не работает кнопка печати' },
    { id: '50061', title: 'Не работает принтер в бухгалтерии' },
    {
        id: '67304',
        title: 'Просьба оценить разработку рекламного баннера на новогодском шоссе. Форматы 600x500x30. Материал – полиэстерол.',
    },
    {
        id: '50061',
        title: 'Проблемы с отправкой уведомлений на одного пользователя',
    },
    { id: '50061', title: 'Не работает принтер в приемной' },
];

const menuItems = [
    { label: 'База знаний' }, // svg: analytics },
    { label: 'Заявки' }, // svg: file },
    { label: 'Сотрудники' }, // svg: users },
    { label: 'Клиенты' }, // svg: user },
    { label: 'Активы' }, // svg: box },
    { label: 'Настройки' }, // svg: cog },
];

const TicketSystem: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState(tickets[2]);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Боковое меню */}
            <nav
                className={`bg-blue-900 text-white w-64 p-4 flex flex-col fixed sm:static h-full z-20 transition-transform transform ${
                    menuOpen
                        ? 'translate-x-0'
                        : '-translate-x-full sm:translate-x-0'
                }`}
            >
                <h2 className="text-2xl font-bold mb-6">Меню</h2>
                <ul className="flex flex-col gap-2">
                    {menuItems.map((item) => (
                        <li
                            key={item.label}
                            className={`flex items-center gap-2 p-2 rounded cursor-pointer ${
                                item.label === 'Заявки'
                                    ? 'bg-blue-500'
                                    : 'hover:bg-blue-700'
                            }`}
                        >
                            {/* <img
                                // src={item.svg}
                                alt={item.label}
                                className="w-6 h-6"
                            /> */}
                            <span>{item.label}</span>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Кнопка меню на мобильных */}
            <button
                className="sm:hidden fixed top-4 left-4 bg-blue-500 text-white p-2 rounded z-30"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                Меню
            </button>

            {/* Основная область */}
            <main className="flex-1 p-6 sm:ml-64 overflow-auto">
                {/* Панель поиска и создание заявки */}
                <div className="flex flex-col sm:flex-row justify-between mb-4 gap-2">
                    <div className="relative flex-1">
                        <input
                            type="text"
                            placeholder="Поиск"
                            className="w-full border border-gray-300 p-2 rounded pl-10"
                        />
                        {/* <FaSearch className="absolute left-3 top-2.5 text-gray-400" /> */}
                        {/* <img
                            // src={search}
                            alt="search"
                            className="absolute left-3 top-2.5 text-gray-400"
                        /> */}
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                        Создать заявку
                    </button>
                </div>

                {/* Таблица заявок */}
                <div className="bg-white shadow rounded overflow-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    ID
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Название
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {tickets.map((ticket) => (
                                <tr
                                    key={ticket.id + ticket.title}
                                    className={`cursor-pointer hover:bg-gray-100 ${
                                        selectedTicket?.id === ticket.id
                                            ? 'bg-blue-100 font-bold'
                                            : ''
                                    }`}
                                    onClick={() => setSelectedTicket(ticket)}
                                >
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {ticket.id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {ticket.title}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>

            {/* Карточка задачи */}
            <aside className="w-full sm:w-96 bg-white p-6 shadow-md overflow-auto sm:relative fixed top-0 right-0 h-full z-10">
                {selectedTicket && (
                    <>
                        <h2 className="text-lg font-bold mb-2">
                            {selectedTicket.title}
                        </h2>
                        <span className="inline-block bg-orange-400 text-white px-2 py-1 rounded mb-2 text-sm">
                            В работе
                        </span>
                        <p className="mb-4 text-gray-700">
                            Длительное время занимает сохранение продажи (вне
                            зависимости от количества добавленных товаров).
                            Просить проверить, почему занимает столько времени.
                        </p>

                        <div className="mb-4">
                            <h3 className="font-semibold mb-2">Комментарии</h3>
                            <div className="bg-gray-100 p-3 rounded mb-2">
                                <p className="text-sm font-semibold">
                                    Иванов Александр (12 августа, 10:00)
                                </p>
                                <p className="text-sm">
                                    Длительное время занимает сохранение
                                    продажи...
                                </p>
                            </div>
                            <textarea
                                placeholder="Добавить комментарий"
                                className="w-full border p-2 rounded mb-2"
                            />
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">
                                Сохранить
                            </button>
                        </div>

                        <div className="space-y-1 text-sm text-gray-600">
                            <p>
                                <strong>Заявитель:</strong> Александр
                                Вознесенский
                            </p>
                            <p>
                                <strong>Создана:</strong> Маркова Анна
                            </p>
                            <p>
                                <strong>Исполнитель:</strong> Кожин Игорь
                            </p>
                            <p>
                                <strong>Приоритет:</strong> Высокий
                            </p>
                            <p>
                                <strong>Срок:</strong> 12.11.2018 г.
                            </p>
                            <p>
                                <strong>Теги:</strong> Сервер 1,
                                mb_support_mymercedes
                            </p>
                        </div>
                    </>
                )}
            </aside>
        </div>
    );
};

export default TicketSystem;
