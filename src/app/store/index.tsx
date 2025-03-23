'use client'
import React, { createContext, useContext, useState } from 'react';
// 创建 Context
const AppContext = createContext<{
    chainId: number;
    setChainId: (ele: number) => void;
    showTokenListModal: boolean;
    setShowTokenListModal: (ele: boolean) => void;
    tokens: any;
    setTokens: (ele: any) => void;
    route: any;
    setRoute: (ele: any) => void;
} | null>(null);

// 创建 Provider 组件，存储登录状态，选择的链，以及切换链的方法
// 存储fetchtoken的参数
const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [chainId, setChainId] = useState(0);
    const [showTokenListModal, setShowTokenListModal] = useState(false);
    const [tokens, setTokens] = useState<any>([])
    const [route, setRoute] = useState<any>(null)

    return (
        <AppContext.Provider value={{ tokens, setTokens, route, setRoute, chainId, setChainId, showTokenListModal, setShowTokenListModal }}>
            {children}
        </AppContext.Provider>
    );
};

// 创建自定义 Hook 来使用 Context
const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};

export { AppProvider, useAppContext };
