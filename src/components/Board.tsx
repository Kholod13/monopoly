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
    groupColor?: string;
    icon?: React.ReactNode;
    img?: string;
    gridClass: string;
    side: 'bottom' | 'left' | 'top' | 'right' | 'corner';
}

const Board = () => {
    const tiles: TileData[] = [
        // УГЛЫ
        { id: 0, type: 'CORNER', icon: <Dices className="text-amber-400 size-6 sm:size-10 md:size-12" />, gridClass: 'row-start-11 col-start-11', side: 'corner' },
        { id: 10, type: 'CORNER', icon: <BellRing className="text-red-500 size-6 sm:size-10 md:size-12" />, gridClass: 'row-start-11 col-start-1', side: 'corner' },
        { id: 20, type: 'CORNER', icon: <Play className="text-green-500 size-6 sm:size-10 md:size-12" />, gridClass: 'row-start-1 col-start-1', side: 'corner' },
        { id: 30, type: 'CORNER', icon: <div className="flex gap-0.5 sm:gap-1"><LinkIcon className="size-4 sm:size-7"/><Sun className="size-4 sm:size-7"/></div>, gridClass: 'row-start-1 col-start-11', side: 'corner' },

        // НИЖНЯЯ СТОРОНА
        { id: 1, name: 'Telegram', type: 'PROPERTY', groupColor: 'bg-sky-500', price: 2200, img: '/images/tiles/telegram.png', gridClass: 'row-start-11 col-start-10', side: 'bottom' },
        { id: 2, type: 'CHANCE', icon: <HelpCircle className="text-indigo-400 size-4 sm:size-8" />, gridClass: 'row-start-11 col-start-9', side: 'bottom' },
        { id: 3, name: 'TikTok', type: 'PROPERTY', groupColor: 'bg-sky-500', price: 2200, img: '/images/tiles/tiktok.webp', gridClass: 'row-start-11 col-start-8', side: 'bottom' },
        { id: 4, name: 'Instagram', type: 'PROPERTY', groupColor: 'bg-sky-500', price: 2400, img: '/images/tiles/instagram.png', gridClass: 'row-start-11 col-start-7', side: 'bottom' },
        { id: 5, name: 'Mercedes', type: 'PROPERTY', groupColor: 'bg-slate-500', price: 2000, img: '/images/tiles/mercedes.png', gridClass: 'row-start-11 col-start-6', side: 'bottom' },
        { id: 6, name: 'Asian Food', type: 'PROPERTY', groupColor: 'bg-orange-600', price: 2600, img: '/images/tiles/asian.png', gridClass: 'row-start-11 col-start-5', side: 'bottom' },
        { id: 7, name: 'KFC', type: 'PROPERTY', groupColor: 'bg-orange-600', price: 2600, img: '/images/tiles/kfc.png', gridClass: 'row-start-11 col-start-4', side: 'bottom' },
        { id: 8, name: 'ChatGPT', type: 'PROPERTY', groupColor: 'bg-emerald-600', price: 1500, img: '/images/tiles/chatgpt.webp', gridClass: 'row-start-11 col-start-3', side: 'bottom' },
        { id: 9, name: 'McDonalds', type: 'PROPERTY', groupColor: 'bg-orange-600', price: 2800, img: '/images/tiles/mcdonalds.png', gridClass: 'row-start-11 col-start-2', side: 'bottom' },

        // ЛЕВАЯ СТОРОНА
        { id: 11, name: 'MSI', type: 'PROPERTY', groupColor: 'bg-purple-600', price: 3000, img: '/images/tiles/msi.svg', gridClass: 'row-start-10 col-start-1', side: 'left' },
        { id: 12, name: 'Kingston', type: 'PROPERTY', groupColor: 'bg-purple-600', price: 3000, img: '/images/tiles/kingston.png', gridClass: 'row-start-9 col-start-1', side: 'left' },
        { id: 13, type: 'CHANCE', icon: <HelpCircle className="text-indigo-400 size-4 sm:size-8" />, gridClass: 'row-start-8 col-start-1', side: 'left' },
        { id: 14, name: 'Nvidia', type: 'PROPERTY', groupColor: 'bg-purple-600', price: 3200, img: '/images/tiles/nvidia.png', gridClass: 'row-start-7 col-start-1', side: 'left' },
        { id: 15, name: 'Audi', type: 'PROPERTY', groupColor: 'bg-slate-500', price: 2000, img: '/images/tiles/audi.png', gridClass: 'row-start-6 col-start-1', side: 'left' },
        { id: 16, type: 'TAX', icon: <HandCoins className="text-yellow-500 size-4 sm:size-8" />, gridClass: 'row-start-5 col-start-1', side: 'left' },
        { id: 17, name: 'Samsung', type: 'PROPERTY', groupColor: 'bg-blue-700', price: 3500, img: '/images/tiles/samsung.png', gridClass: 'row-start-4 col-start-1', side: 'left' },
        { id: 18, type: 'CHANCE', icon: <HelpCircle className="text-indigo-400 size-4 sm:size-8" />, gridClass: 'row-start-3 col-start-1', side: 'left' },
        { id: 19, name: 'Apple', type: 'PROPERTY', groupColor: 'bg-blue-700', price: 4000, img: '/images/tiles/apple.png', gridClass: 'row-start-2 col-start-1', side: 'left' },

        // ВЕРХНЯЯ СТОРОНА
        { id: 21, name: 'Ahmad Tea', type: 'PROPERTY', groupColor: 'bg-blue-900', price: 600, img: '/images/tiles/ahmad.png', gridClass: 'row-start-1 col-start-2', side: 'top' },
        { id: 22, type: 'CHANCE', icon: <HelpCircle className="size-4 sm:size-8" />, gridClass: 'row-start-1 col-start-3', side: 'top' },
        { id: 23, name: 'Yorkshire', type: 'PROPERTY', groupColor: 'bg-blue-900', price: 600, img: '/images/tiles/yorkshire.png', gridClass: 'row-start-1 col-start-4', side: 'top' },
        { id: 24, type: 'TAX', icon: <Landmark className="size-4 sm:size-8" />, gridClass: 'row-start-1 col-start-5', side: 'top' },
        { id: 25, name: 'BMW', type: 'PROPERTY', groupColor: 'bg-slate-500', price: 2000, img: '/images/tiles/bmw.png', gridClass: 'row-start-1 col-start-6', side: 'top' },
        { id: 26, name: 'DiDi', type: 'PROPERTY', groupColor: 'bg-orange-600', price: 1000, img: '/images/tiles/didi.png', gridClass: 'row-start-1 col-start-7', side: 'top' },
        { id: 27, type: 'CHANCE', icon: <HelpCircle className="size-4 sm:size-8" />, gridClass: 'row-start-1 col-start-8', side: 'top' },
        { id: 28, name: 'Bolt', type: 'PROPERTY', groupColor: 'bg-orange-600', price: 1000, img: '/images/tiles/bolt.png', gridClass: 'row-start-1 col-start-9', side: 'top' },
        { id: 29, name: 'Uber', type: 'PROPERTY', groupColor: 'bg-orange-600', price: 1200, img: '/images/tiles/uber.png', gridClass: 'row-start-1 col-start-10', side: 'top' },

        // ПРАВАЯ СТОРОНА
        { id: 31, name: 'Sprite', type: 'PROPERTY', groupColor: 'bg-green-600', price: 1400, img: '/images/tiles/sprite.svg', gridClass: 'row-start-2 col-start-11', side: 'right' },
        { id: 32, name: 'Claude', type: 'PROPERTY', groupColor: 'bg-emerald-600', price: 1500, img: '/images/tiles/claude.webp', gridClass: 'row-start-3 col-start-11', side: 'right' },
        { id: 33, name: 'Fanta', type: 'PROPERTY', groupColor: 'bg-green-600', price: 1400, img: '/images/tiles/fanta.png', gridClass: 'row-start-4 col-start-11', side: 'right' },
        { id: 34, name: 'CocaCola', type: 'PROPERTY', groupColor: 'bg-green-600', price: 1600, img: '/images/tiles/coca.png', gridClass: 'row-start-5 col-start-11', side: 'right' },
        { id: 35, name: 'Lexus', type: 'PROPERTY', groupColor: 'bg-slate-500', price: 2000, img: '/images/tiles/lexus.png', gridClass: 'row-start-6 col-start-11', side: 'right' },
        { id: 36, name: 'Temu', type: 'PROPERTY', groupColor: 'bg-yellow-600', price: 1800, img: '/images/tiles/temu.png', gridClass: 'row-start-7 col-start-11', side: 'right' },
        { id: 37, type: 'CHANCE', icon: <HelpCircle className="size-4 sm:size-8" />, gridClass: 'row-start-8 col-start-11', side: 'right' },
        { id: 38, name: 'AliExpress', type: 'PROPERTY', groupColor: 'bg-yellow-600', price: 1800, img: '/images/tiles/ali.png', gridClass: 'row-start-9 col-start-11', side: 'right' },
        { id: 39, name: 'Amazon', type: 'PROPERTY', groupColor: 'bg-yellow-600', price: 2000, img: '/images/tiles/amazon.png', gridClass: 'row-start-10 col-start-11', side: 'right' },
    ];

    return (
        /* p-4 для мобилок, p-10 для десктопа */
        <div className="flex w-full items-center justify-center p-4 sm:p-10 overflow-hidden">
            {/*
               Адаптивный размер доски:
               На мобилках: 95vw (ширина экрана)
               На десктопе: 95vh (высота экрана)
            */}
            <div
                className="grid relative w-[95vw] h-[95vw] sm:w-[90vh] sm:h-[90vh] bg-slate-900 p-0.5 sm:p-1 shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-slate-800"
                style={{
                    gridTemplateColumns: '14% repeat(9, 8%) 14%',
                    gridTemplateRows: '14% repeat(9, 8%) 14%',
                }}
            >
                {tiles.map((tile) => (
                    <div
                        key={tile.id}
                        className={`
                            ${tile.gridClass} 
                            bg-slate-800 border-[0.5px] sm:border border-slate-700/50 relative flex flex-col items-center
                            hover:bg-slate-700/80 transition-colors duration-200 group cursor-pointer
                        `}
                    >
                        {/* ЦЕННИКИ (Уменьшены для мобилок) */}
                        {tile.price && (
                            <div className={`
                                absolute z-30 bg-slate-700 text-white px-1 sm:px-2 py-0.5 rounded border border-slate-600 shadow-xl 
                                text-[6px] sm:text-[10px] font-bold whitespace-nowrap h-fit w-fit
                                ${tile.side === 'top' ? '-top-4 sm:-top-8 left-0 right-0 mx-auto' : ''}
                                ${tile.side === 'bottom' ? '-bottom-4 sm:-bottom-8 left-0 right-0 mx-auto' : ''}
                                ${tile.side === 'left' ? '-left-6 sm:-left-10 top-0 bottom-0 my-auto -rotate-90' : ''}
                                ${tile.side === 'right' ? '-right-6 sm:-right-10 top-0 bottom-0 my-auto rotate-90' : ''}
                            `}>
                                {tile.price}
                            </div>
                        )}

                        {/* ЦВЕТОВАЯ ПОЛОСКА (Тоньше на мобилках) */}
                        {tile.groupColor && (
                            <div className={`
                                absolute ${tile.groupColor} 
                                ${tile.side === 'bottom' ? 'top-0 h-1 sm:h-4 w-full' : ''}
                                ${tile.side === 'top' ? 'bottom-0 h-1 sm:h-4 w-full' : ''}
                                ${tile.side === 'left' ? 'right-0 w-1 sm:w-4 h-full' : ''}
                                ${tile.side === 'right' ? 'left-0 w-1 sm:w-4 h-full' : ''}
                            `} />
                        )}

                        {/* КОНТЕНТ */}
                        <div className={`
                            flex flex-col items-center justify-between w-full h-full p-0.5 sm:p-2 overflow-hidden
                            ${tile.side === 'left' ? 'rotate-270' : ''}
                            ${tile.side === 'right' ? 'rotate-90' : ''}
                            ${tile.side === 'top' ? 'rotate-0' : ''}
                        `}>
                            {tile.name && (
                                <span className="text-[5px] sm:text-[10px] text-slate-100 font-bold uppercase tracking-tight text-center leading-none h-[10px] sm:h-[25px] flex items-center">
                                    {tile.name}
                                </span>
                            )}

                            <div className="flex-1 w-full relative flex items-center justify-center min-h-0">
                                {tile.icon && <div className="text-slate-400 drop-shadow-md">{tile.icon}</div>}
                                {tile.img && (
                                    <div className="relative w-full h-full max-h-[80%] group-hover:scale-110 transition-transform duration-300">
                                        <Image
                                            src={tile.img}
                                            alt={tile.name || ''}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 640px) 30px, 150px"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}

                {/* ЦЕНТР (Адаптивные шрифты) */}
                <div className="col-start-2 col-end-11 row-start-2 row-end-11 flex flex-col items-center justify-center bg-slate-900/50 m-0.5 sm:m-1 rounded-lg sm:rounded-2xl border border-slate-800 shadow-inner relative overflow-hidden text-white">
                    <div className="absolute text-[10vw] sm:text-[12vw] font-black text-slate-800/20 rotate-[-35deg] select-none uppercase">
                        Monopoly
                    </div>

                    <div className="z-20 flex flex-col items-center gap-2 sm:gap-8 scale-[0.6] sm:scale-100">
                        <div className="flex items-center gap-3 sm:gap-6 bg-slate-800/80 px-4 sm:px-10 py-3 sm:py-8 rounded-xl sm:rounded-3xl border border-slate-700 shadow-2xl backdrop-blur-xl">
                            <Timer className="text-red-500 animate-pulse size-8 sm:size-[60px]" />
                            <div className="flex flex-col">
                                <span className="text-[8px] sm:text-sm text-slate-500 uppercase font-bold tracking-[0.1em] sm:tracking-[0.3em]">Turn Ends</span>
                                <span className="text-2xl sm:text-7xl font-mono font-bold tracking-tighter">01:30</span>
                            </div>
                        </div>
                        <div className="bg-blue-600/20 border border-blue-500/40 px-4 sm:px-10 py-1.5 sm:py-3 rounded-full text-blue-400 font-bold uppercase tracking-widest text-[8px] sm:text-lg shadow-lg">
                            Turn: Player 1
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Board;