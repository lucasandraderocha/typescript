declare global {
    interface Window {
        UserData: Partial<UserData>;
    }
}
interface UserData {
    name: string;
    email: string;
    cpf: string;
}
export {};
//# sourceMappingURL=script.d.ts.map