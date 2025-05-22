export default {
	runQuery() {
		Api1_edited_1.run()
	},
	formatData() {
		return Api1_edited_1.data.find(interview => interview === "1");
	}
}