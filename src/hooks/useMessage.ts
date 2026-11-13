export function useMessage() {

    function show() {
        console.log("Mensagem enviada pelo Hook!");
    }

    return {
        show
    }
}   