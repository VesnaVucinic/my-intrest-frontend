// sync actions
export const updateNewBoardForm = (name, value) => {
    const formData = { name, value }
    console.log("formData in action creator", formData)
    return {
        type: "UPDATE_NEW_BOARD_FORM",
        formData: { name, value }
    }
}