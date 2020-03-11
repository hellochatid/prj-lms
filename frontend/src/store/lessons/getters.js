export default {
    list(state) {
        return state.list
    },
    listById: (state) => (id) => {
        return state.list.filter(data => data.id === id)
    },
    listByCourse: (state, getters, store, rootState) => (courseId) => {
        const listByCourse = [];
        const items = state.list.filter(data => parseInt(data.course_id) === parseInt(courseId))
        items.forEach(data => {
            var materials = rootState['materials/listByLesson'](data.id);
            var item = {
                id: data.id,
                name: data.title,
                materials: materials,
                quiz: [
                    {
                        id: 1,
                        title: "aaaaaaa"
                    },
                ]
            }
            listByCourse.push(item);
        });
        return listByCourse;
    },
}
