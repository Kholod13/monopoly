// app/page.tsx
import Board from '../src/components/Board';

export default function Home() {
    return (
        <main className="flex min-h-screen bg-slate-950 lg:bg-slate-50 items-center justify-center p-0 lg:gap-8 overflow-hidden">

            {/* Левая панель - скрыта на мобилках и планшетах (до lg) */}
            <div className="hidden lg:flex flex-col w-64 h-[85vh] bg-white rounded-xl shadow-lg p-4 border border-gray-200">
                <h2 className="text-xl font-bold mb-4 border-b pb-2 text-gray-800">Players</h2>
                <div className="flex flex-col gap-3">
                    <div className="p-3 bg-gray-100 rounded text-gray-400 italic text-sm">
                        Ожидание игроков...
                    </div>
                </div>
            </div>

            {/* Игровое поле - теперь занимает максимум места на мобилках */}
            <div className="w-full h-full flex items-center justify-center">
                <div className="shadow-2xl rounded-sm overflow-hidden flex items-center justify-center">
                    <Board />
                </div>
            </div>

        </main>
    );
}