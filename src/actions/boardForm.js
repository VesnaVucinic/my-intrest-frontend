// sync actions
export const updateBoardForm = (name, value) => {
    const formData = { name, value }
    // console.log("formData in action creator", formData)
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

// I take object board from my state and pick exactly of that board peacis that I need and that boardFormData is looking for and update d all in once 
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