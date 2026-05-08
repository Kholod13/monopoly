// app/page.tsx
import Board from '../src/components/Board';

export default function Home() {
    return (
        // Делаем обертку на весь экран, серый фон для солидности
        <main className="flex min-h-screen bg-slate-50 items-center justify-center p-0 gap-8">

            {/* Левая панель (пока пустая, здесь будет список игроков) */}
            <div className="hidden lg:flex flex-col w-64 h-[800px] bg-white rounded-xl shadow-lg p-4 border border-gray-200">
                <h2 className="text-xl font-bold mb-4 border-b pb-2 text-gray-800">Players</h2>
                <div className="flex flex-col gap-3">
                    {/* Сюда мы позже добавим компонент PlayerList */}
                    <div className="p-3 bg-gray-100 rounded text-gray-400 italic text-sm">
                        Ожидание игроков...
                    </div>
                </div>
            </div>

            {/* Наше игровое поле */}
            <div className="flex-none shadow-2xl rounded-sm overflow-hidden">
                <Board />
            </div>

        </main>
    );
}