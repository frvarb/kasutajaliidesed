import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    cWhite: {
        color: 'white',
    },
});

class Policy extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <div>
                <h1>
                    Terms & Policy
                </h1>
                <br/>
                <Typography className={classes.cWhite} component="p">
                    Lorem ipsum dolor sit amet, vide possit scribentur id usu, meis liber moderatius his ne. Ad velit oportere has, ne vidit tation eos. Eum alii meliore dissentiet ea, per cu minim antiopam inimicus, ex mucius virtute minimum mea. Mea case sanctus mentitum ex. Quis veniam aeterno has at, pri putent quodsi dissentiunt ei. Mucius quidam noluisse has ex, etiam commune te nam. Quot essent placerat ad ius, deleniti comprehensam sea cu, nam ea purto exerci tamquam.

                    Inermis apeirian at usu, an appetere signiferumque necessitatibus mea, noster sadipscing an qui. Aliquando vituperata omittantur vel in. Sale invidunt vituperata te sit, eam at modo hinc cetero, facete impedit liberavisse per eu. Cu ferri adhuc illum mei, oporteat scribentur ex pri, alia utinam pri id.

                    Mel an ipsum mentitum menandri. Audire invenire sit et, choro tritani usu cu, evertitur forensibus an vis. Ut vis illud deleniti, id sea veri omittam. Ad mei justo similique, his putent verear lobortis an, id stet fierent quo.

                    Ut nam oblique rationibus sententiae, id atqui vocibus per. Sumo feugait ad eum. Eu mundi apeirian mei, cum autem praesent ea, mel ex tamquam malorum ullamcorper. Eum integre consetetur disputationi id. Sed case dignissim reprimique ea, affert prodesset te mei. Pri ut meis recusabo.

                    Id duo assum graece, cu sed elit reformidans. Consulatu scribentur cum ei, ea mei mutat dictas, justo prodesset in sea. Ne usu novum impedit, vis ex augue fabellas. Congue scriptorem eos ut, ad eius debitis ancillae mea.

                    Iuvaret eruditi placerat eam ad, ullamcorper philosophia sed id. Mei an doctus delectus deseruisse, duo no facer vivendo, ne duo oratio omnesque percipit. Putent numquam vocibus id ius, has tamquam tacimates adipiscing ut, sed ad option omnesque molestie. Has ea zril voluptua. Nihil volumus similique est ut.

                    Cum ex vidit sapientem consequat, modus lorem labores duo cu. Per ne illum posidonium scribentur. Vis eu gloriatur appellantur, no phaedrum intellegat per. Per aliquip honestatis ut, magna prima adipisci vel te, eleifend praesent qui id. Decore dicunt vivendum id quo, has cu dicant aliquam complectitur. Brute equidem quo ei, vim te veri rebum timeam.

                    Quo altera platonem ne, te diam copiosae nec. Munere ornatus ea his, eum sumo dicunt appellantur cu. Ad quando dolorem repudiandae ius, ex cum error dissentias concludaturque. An nonumes vocibus nominati vis, id quaeque ocurreret ius, ne quod probatus accusata pri. An commodo appellantur suscipiantur eam. Agam error at vim.

                    Duo cibo denique postulant in. Salutatus vulputate nam an. No eros aliquam moderatius vim. Amet mollis at mel, ad sea errem aliquam gubergren, ex recteque definitionem concludaturque pro.

                    Vel eros illum vidisse ut, cum utroque fastidii accommodare et, illum eruditi praesent ad usu. Postea pertinax eum et, dictas lobortis quo ea. Quo consul corpora antiopam ex. Te nisl imperdiet persequeris sed, nec ne amet veniam interpretaris, sea at discere alienum. Quidam mandamus te quo. Vel mentitum delectus vituperatoribus ad, sea everti accusamus et.
                </Typography>
            </div>
        );
    }
}

Policy.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Policy);