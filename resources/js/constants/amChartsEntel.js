/**
 * A color scheme inspired by {@link https://datavizproject.com/}
 */
import { is } from "@amcharts/amcharts4/.internal/core/Registry";
import { color } from "@amcharts/amcharts4/.internal/core/utils/Color";
var theme = function (object) {
    if (is(object, "ColorSet")) {
        object.list = [
            color("#005cff"),
            color("#FF3E00"),
            color("#10069f"),
            color("#cccccc")
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