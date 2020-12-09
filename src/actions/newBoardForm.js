// sync actions
export const updateNewBoardForm = (name, value) => {
    return {
        type: "UPDATE_NEW_BOARD_FORM",
        formData: { name, value }
    }
}