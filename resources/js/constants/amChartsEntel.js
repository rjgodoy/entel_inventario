/**
 * A color scheme inspired by {@link https://datavizproject.com/}
 */
import { is } from "@amcharts/amcharts4/.internal/core/Registry";
import { color } from "@amcharts/amcharts4/.internal/core/utils/Color";
var theme = function (object) {
    if (is(object, "ColorSet")) {
        object.list = [
            color("#005CFF"),
            color("#FF3C00"),
            color("#1005A0"),
            color("#CCCCCC"),
            color("#2FCBF1"),
            color("#43E8B4"),
            color("#FD6D9B")
        ];
        object.reuse = false;
        object.stepOptions = {
            lightness: 0.05,
            hue: 0
        };
        object.passOptions = {};
    }
};
export default theme;
//# sourceMappingURL=dataviz.js.map