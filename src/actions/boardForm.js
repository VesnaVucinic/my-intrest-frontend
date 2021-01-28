// sync actions
export const updateBoardForm = (name, value) => {
    const formData = { name, value }
    return {
        type: "UPDATE_BOARD_FORM",
        formData
    }
}

export const resetBoardForm = () => {
    return {
        type: "RESET_BOARD_FORM",
        
    }
}

export const setFormDataForEdit = board => {
    const boardFormData = {
        name: board.attributes.name,
        imageUrl: board.attributes.image_url
    }
    return {
        type: "SET_FORM_DATA_FOR_EDIT",
        boardFormData
    }
}