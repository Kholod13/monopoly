"use client";

import React from 'react';
import {
    HelpCircle, Play, Dices, BellRing, Sun,
    Link as LinkIcon, HandCoins, Landmark, Timer
} from 'lucide-react';
import Image from 'next/image';

type TileType = 'PROPERTY' | 'CORNER' | 'TAX' | 'CHANCE';

interface TileData {
    id: number;
    name?: string;
    type: TileType;
    price?: number;
    groupColor?: string; // Цвет группы (например, 'bg-blue-500')
    icon?: React.ReactNode;
    img?: string;
    gridClass: string;
    side: 'bottom' | 'left' | 'top' | 'right' | 'corner';
}

const Board = () => {
    const tiles: TileData[] = [
        // УГЛЫ
        { id: 0, type: 'CORNER', icon: <Dices size={40} className="text-amber-400" />, gridClass: 'row-start-11 col-start-11', side: 'corner' },
        { id: 10, type: 'CORNER', icon: <BellRing size={40} className="text-red-500" />, gridClass: 'row-start-11 col-start-1', side: 'corner' },
        { id: 20, type: 'CORNER', icon: <Play size={40} className="text-green-500" />, gridClass: 'row-start-1 col-start-1', side: 'corner' },
        { id: 30, type: 'CORNER', icon: <div className="flex gap-1"><LinkIcon size={24}/><Sun size={24}/></div>, gridClass: 'row-start-1 col-start-11', side: 'corner' },

        // НИЖНЯЯ СТОРОНА (Группы IT / Соцсети)
        { id: 1, name: 'Telegram', type: 'PROPERTY', groupColor: 'bg-sky-500', price: 400, img: '/images/tiles/telegram.png', gridClass: 'row-start-11 col-start-10', side: 'bottom' },
        { id: 2, type: 'CHANCE', icon: <HelpCircle className="text-indigo-400" />, gridClass: 'row-start-11 col-start-9', side: 'bottom' },
        { id: 3, name: 'TikTok', type: 'PROPERTY', groupColor: 'bg-sky-500', price: 350, img: '/images/tiles/tiktok.webp', gridClass: 'row-start-11 col-start-8', side: 'bottom' },
        { id: 4, name: 'Instagram', type: 'PROPERTY', groupColor: 'bg-sky-500', price: 300, img: '/images/tiles/instagram.png', gridClass: 'row-start-11 col-start-7', side: 'bottom' },
        { id: 5, name: 'Mercedes', type: 'PROPERTY', groupColor: 'bg-slate-500', price: 500, img: '/images/tiles/mercedes.png', gridClass: 'row-start-11 col-start-6', side: 'bottom' },
        { id: 6, name: 'Asian Food', type: 'PROPERTY', groupColor: 'bg-orange-600', price: 250, img: '/images/tiles/asian.png', gridClass: 'row-start-11 col-start-5', side: 'bottom' },
        { id: 7, name: 'KFC', type: 'PROPERTY', groupColor: 'bg-orange-600', price: 200, img: '/images/tiles/kfc.png', gridClass: 'row-start-11 col-start-4', side: 'bottom' },
        { id: 8, name: 'ChatGPT', type: 'PROPERTY', groupColor: 'bg-emerald-500', price: 600, img: '/images/tiles/chatgpt.webp', gridClass: 'row-start-11 col-start-3', side: 'bottom' },
        { id: 9, name: 'McDonalds', type: 'PROPERTY', groupColor: 'bg-orange-600', price: 150, img: '/images/tiles/mcdonalds.png', gridClass: 'row-start-11 col-start-2', side: 'bottom' },

        // ЛЕВАЯ СТОРОНА (Группы Tech / Hardware)
        { id: 11, name: 'MSI', type: 'PROPERTY', groupColor: 'bg-purple-600', price: 300, img: '/images/tiles/msi.svg', gridClass: 'row-start-10 col-start-1', side: 'left' },
        { id: 12, name: 'Kingston', type: 'PROPERTY', groupColor: 'bg-purple-600', price: 280, img: '/images/tiles/kingston.png', gridClass: 'row-start-9 col-start-1', side: 'left' },
        { id: 13, type: 'CHANCE', icon: <HelpCircle className="text-indigo-400" />, gridClass: 'row-start-8 col-start-1', side: 'left' },
        { id: 14, name: 'Nvidia', type: 'PROPERTY', groupColor: 'bg-purple-600', price: 450, img: '/images/tiles/nvidia.png', gridClass: 'row-start-7 col-start-1', side: 'left' },
        { id: 15, name: 'Audi', type: 'PROPERTY', groupColor: 'bg-slate-500', price: 480, img: '/images/tiles/audi.png', gridClass: 'row-start-6 col-start-1', side: 'left' },
        { id: 16, type: 'TAX', icon: <HandCoins className="text-yellow-500" />, gridClass: 'row-start-5 col-start-1', side: 'left' },
        { id: 17, name: 'Samsung', type: 'PROPERTY', groupColor: 'bg-blue-700', price: 520, img: '/images/tiles/samsung.png', gridClass: 'row-start-4 col-start-1', side: 'left' },
        { id: 18, type: 'CHANCE', icon: <HelpCircle className="text-indigo-400" />, gridClass: 'row-start-3 col-start-1', side: 'left' },
        { id: 19, name: 'Apple', type: 'PROPERTY', groupColor: 'bg-blue-700', price: 700, img: '/images/tiles/apple.png', gridClass: 'row-start-2 col-start-1', side: 'left' },

        // ВЕРХНЯЯ СТОРОНА (Слева направо)
        { id: 21, name: 'ahmad tea', type: 'PROPERTY', img: '/images/tiles/ahmad.png', gridClass: 'row-start-1 col-start-2', groupColor: 'bg-blue-700', price: 700, side: 'top' },
        { id: 22, type: 'CHANCE', icon: <HelpCircle />, gridClass: 'row-start-1 col-start-3', side: 'top' },
        { id: 23, name: 'yorkshire tea', type: 'PROPERTY', img: '/images/tiles/yorkshire.png', gridClass: 'row-start-1 col-start-4', groupColor: 'bg-blue-700', price: 700, side: 'top' },
        { id: 24, type: 'TAX', icon: <Landmark />, gridClass: 'row-start-1 col-start-5', side:'top' },
        { id: 25, name: 'bmw', type: 'PROPERTY', img: '/images/tiles/bmw.png', gridClass: 'row-start-1 col-start-6', groupColor: 'bg-blue-700', price: 700, side: 'top' },
        { id: 26, name: 'DiDi', type: 'PROPERTY', img: '/images/tiles/didi.png', gridClass: 'row-start-1 col-start-7', groupColor: 'bg-blue-700', price: 700, side: 'top' },
        { id: 27, type: 'CHANCE', icon: <HelpCircle />, gridClass: 'row-start-1 col-start-8', side: 'top' },
        { id: 28, name: 'bolt', type: 'PROPERTY', img: '/images/tiles/bolt.png', gridClass: 'row-start-1 col-start-9', groupColor: 'bg-blue-700', price: 700, side: 'top' },
        { id: 29, name: 'uber', type: 'PROPERTY', img: '/images/tiles/uber.png', gridClass: 'row-start-1 col-start-10', groupColor: 'bg-blue-700', price: 700, side: 'top' },

// ПРАВАЯ СТОРОНА (Сверху вниз)
        { id: 31, name: 'Sprite', type: 'PROPERTY', img: '/images/tiles/sprite.svg', gridClass: 'row-start-2 col-start-11', groupColor: 'bg-blue-700', price: 700, side: 'top' },
        { id: 32, name: 'Claude Code', type: 'PROPERTY', img: '/images/tiles/claude.webp', gridClass: 'row-start-3 col-start-11', groupColor: 'bg-blue-700', price: 700, side: 'top' },
        { id: 33, name: 'Fanta', type: 'PROPERTY', img: '/images/tiles/fanta.png', gridClass: 'row-start-4 col-start-11', groupColor: 'bg-blue-700', price: 700, side: 'top' },
        { id: 34, name: 'CocaCola', type: 'PROPERTY', img: '/images/tiles/coca.png', gridClass: 'row-start-5 col-start-11', groupColor: 'bg-blue-700', price: 700, side: 'top' },
        { id: 35, name: 'lexus', type: 'PROPERTY', img: '/images/tiles/lexus.png', gridClass: 'row-start-6 col-start-11', groupColor: 'bg-blue-700', price: 700, side: 'top' },
        { id: 36, name: 'Temu', type: 'PROPERTY', img: '/images/tiles/temu.png', gridClass: 'row-start-7 col-start-11', groupColor: 'bg-blue-700', price: 700, side: 'top' },
        { id: 37, type: 'CHANCE', icon: <HelpCircle />, gridClass: 'row-start-8 col-start-11', side: 'top' },
        { id: 38, name: 'AliExpress', type: 'PROPERTY', img: '/images/tiles/ali.png', gridClass: 'row-start-9 col-start-11', groupColor: 'bg-blue-700', price: 700, side: 'top' },
        { id: 39, name: 'Amazon', type: 'PROPERTY', img: '/images/tiles/amazon.png', gridClass: 'row-start-10 col-start-11', groupColor: 'bg-blue-700', price: 700, side: 'top' },
    ];

    return (
        <div className="relative w-full max-w-[850px] aspect-square bg-slate-900 p-3 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-xl border border-slate-700/50">
            <div className="grid grid-cols-11 grid-rows-11 h-full w-full gap-1">

                {tiles.map((tile) => (
                    <div
                        key={tile.id}
                        className={`
              ${tile.gridClass} 
              bg-slate-800 border border-slate-700/30 relative flex flex-col items-center justify-between
              hover:bg-slate-700/50 transition-all duration-300 group cursor-pointer overflow-hidden
              ${tile.side === 'corner' ? 'bg-slate-800/80' : ''}
            `}
                    >
                        {/* Цветовая полоска для собственности */}
                        {tile.groupColor && (
                            <div className={`
                absolute ${tile.groupColor} 
                ${tile.side === 'bottom' ? 'top-0 h-3 w-full' : ''}
                ${tile.side === 'top' ? 'bottom-0 h-3 w-full' : ''}
                ${tile.side === 'left' ? 'right-0 w-3 h-full' : ''}
                ${tile.side === 'right' ? 'left-0 w-3 h-full' : ''}
                shadow-[0_0_10px_rgba(0,0,0,0.3)]
              `} />
                        )}

                        <div className="flex flex-col items-center justify-center h-full w-full p-2">
                            {tile.name && (
                                <span className="text-[9px] text-slate-300 font-medium uppercase tracking-tighter mb-1 text-center leading-none">
                  {tile.name}
                </span>
                            )}

                            {tile.icon && <div className="drop-shadow-md">{tile.icon}</div>}

                            {tile.img && (
                                <div className="relative w-10 h-10 my-1 group-hover:scale-110 transition-transform">
                                    <Image src={tile.img} alt={tile.name || ''} fill className="object-contain" />
                                </div>
                            )}

                            {tile.price && (
                                <span className="text-[10px] font-bold text-emerald-400 mt-1">
                  ${tile.price}
                </span>
                            )}
                        </div>

                        {/* Эффект свечения при ховере */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                ))}

                {/* ЦЕНТРАЛЬНАЯ ЧАСТЬ (Dashboard Style) */}
                <div className="col-start-2 col-end-11 row-start-2 row-end-11 flex flex-col items-center justify-center bg-slate-900/40 relative rounded-2xl m-2 border border-slate-800/50 backdrop-blur-sm shadow-inner overflow-hidden">

                    {/* Декоративный логотип на фоне */}
                    <div className="absolute text-[120px] font-black text-slate-800/20 rotate-[-35deg] select-none z-0">
                        MONOPOLY
                    </div>

                    {/* Панель таймера */}
                    <div className="z-10 flex flex-col items-center gap-4">
                        <div className="flex items-center gap-4 bg-slate-800/80 px-8 py-4 rounded-2xl border border-slate-700 shadow-2xl backdrop-blur-md">
                            <div className="p-3 bg-red-500/20 rounded-xl">
                                <Timer size={32} className="text-red-500 animate-pulse" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-[0.2em]">Time Left</span>
                                <span className="text-5xl font-mono font-bold text-white leading-none">01:30</span>
                            </div>
                            <div className="w-4 h-12 bg-red-500 rounded-full ml-2 shadow-[0_0_15px_rgba(239,68,68,0.5)]"></div>
                        </div>

                        {/* Быстрая инфо-панель (чей ход) */}
                        <div className="bg-slate-800/50 px-6 py-2 rounded-full border border-slate-700/50 text-slate-300 text-sm font-medium">
                            Current Turn: <span className="text-blue-400 font-bold">Player 1</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Board;