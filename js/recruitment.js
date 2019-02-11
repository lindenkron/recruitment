
var mm = {
    dark: {
        d: "Light Mode",
        m: "sun"
    },
    light: {
        d: "Dark Mode",
        m: "moon"
    }
};

function updateSyntax() {
    var druid = $('#druid-field').val();
    var druidBalance = $('#balance-field').val();
    var druidFeral = $('#feral-field').val();
    var druidRestoration = $('#restoration-field').val();
    var hunter = $('#hunter-field').val();
    var hunterBeastmastery = $('#beastmastery-field').val();
    var hunterMarksmanship = $('#marksmanship-field').val();
    var hunterSurvival = $('#survival-field').val();
    var mage = $('#mage-field').val();
    var mageArcane = $('#arcane-field').val();
    var mageFire = $('#fire-field').val();
    var mageFrost = $('#frost-field').val();
    var paladin = $('#paladin-field').val();
    var paladinHoly = $('#holypa-field').val();
    var paladinProtection = $('#protectionpa-field').val();
    var paladinRetribution = $('#retribution-field').val();
    var priest = $('#priest-field').val();
    var priestDiscipline = $('#discipline-field').val();
    var priestHoly = $('#holypr-field').val();
    var priestShadow = $('#shadow-field').val();
    var rogue = $('#rogue-field').val();
    var rogueAssassination = $('#assassination-field').val();
    var rogueCombat = $('#combat-field').val();
    var rogueSubtlety = $('#subtlety-field').val();
    var shaman = $('#shaman-field').val();
    var shamanElemental = $('#elemental-field').val();
    var shamanEnhancement = $('#enhancement-field').val();
    var shamanRestoration = $('#restorationsha-field').val();
    var warlock = $('#warlock-field').val();
    var warlockAffliction = $('#affliction-field').val();
    var warlockDemonology = $('#demonology-field').val();
    var warlockDestruction = $('#destruction-field').val();
    var warrior = $('#warrior-field').val();
    var warriorArms = $('#arms-field').val();
    var warriorFury = $('#fury-field').val();
    var warriorProtection = $('#protectionwa-field').val();
    
    var checkObj = {
        'druid': druid, 'balance': druidBalance, 'feral': druidFeral, 'restoration': druidRestoration,
        'hunter': hunter, 'beastmastery': hunterBeastmastery, 'marksmanship': hunterMarksmanship, 'survival': hunterSurvival,
        'mage': mage, 'arcane': mageArcane, 'fire': mageFire, 'frost': mageFrost,
        'paladin': paladin, 'holypa': paladinHoly, 'protectionpa': paladinProtection, 'retribution': paladinRetribution,
        'priest': priest, 'discipline': priestDiscipline, 'holypr': priestHoly, 'shadow': priestShadow,
        'rogue': rogue, 'assassination': rogueAssassination, 'combat': rogueCombat, 'subtlety': rogueSubtlety,
        'shaman': shaman, 'elemental': shamanElemental, 'enhancement': shamanEnhancement, 'restorationsha': shamanRestoration,
        'warlock': warlock, 'affliction': warlockAffliction, 'demonology': warlockDemonology, 'destruction': warlockDestruction,
        'warrior': warrior, 'arms': warriorArms, 'fury': warriorFury, 'protectionwa': warriorProtection
    };
    
    for (var key in checkObj) {
        if (checkObj.hasOwnProperty(key)) {
            if (checkObj[key] > 9 || checkObj[key] < 0) {
            document.getElementById(key + '-field').value = 0;
            return
            }
        }
    }

    var apptext = '';

    if (druid && druidBalance && druidFeral && druidRestoration && hunter && hunterBeastmastery && hunterMarksmanship && hunterSurvival && mage && mageArcane && mageFire && mageFrost && paladin && paladinHoly && paladinProtection && paladinRetribution && priest && priestDiscipline && priestHoly && priestShadow && rogue && rogueAssassination && rogueCombat && rogueSubtlety && shaman && shamanElemental && shamanEnhancement && shamanRestoration && warlock && warlockAffliction && warlockDemonology && warlockDestruction && warrior && warriorArms && warriorFury && warriorProtection) {
        apptext = '-recruitment ' + druid + '+' + druidBalance + '-' + druidFeral + '-' + druidRestoration + '-|' + hunter + '+' + hunterBeastmastery + '-' + hunterMarksmanship + '-' + hunterSurvival + '-|' + mage + '+' + mageArcane + '-' + mageFire + '-' + mageFrost + '-|' + paladin + '+' + paladinHoly + '-' + paladinProtection + '-' + paladinRetribution + '-|' + priest + '+' + priestDiscipline + '-' + priestHoly + '-' + priestShadow + '-|' + rogue + '+' + rogueAssassination + '-' + rogueCombat + '-' + rogueSubtlety + '-|' + shaman + '+' + shamanElemental + '-' + shamanEnhancement + '-' + shamanRestoration + '-|' + warlock + '+' + warlockAffliction + '-' + warlockDemonology + '-' + warlockDestruction + '-|' + warrior + '+' + warriorArms + '-' + warriorFury + '-' + warriorProtection + '-';
    }
    $('#syntax').text(apptext);
}

function pageLoad(page) {
    window.sct = 1;
    var cb_btn = '';
    var st = '';
    switch (page) {
        case "create":+
            $('div#content').on('input', 'input[id*="-field"]', updateSyntax);
            cb_btn = '#copy-btn';
            st = '#syntax';
            break;
    }
    var cb = new ClipboardJS(cb_btn, {
        text: function(trigger) {
            return $(st).text();
        }
    });
    cb.on('success', function(e) {
        $(e.trigger).html('Copied');
        setTimeout(function() {
        $(e.trigger).html('Copy');
        }, 2000);
    });
    $('body').on('click', 'a[id*="switch-"]', switchMode);
    if (loadTheme()) {
        switchMode();
    }
}

// Anything under here don't mess with, it's themes
function loadTheme() {
    var light = false;
    if (typeof(Storage) !== 'undefined') {
        light = (localStorage.getItem('light') == 'true');
    }
    return light;
}

function setTheme() {
    if (typeof(Storage) !== 'undefined') {
        var light = false;
        if ($('body').attr('class') == 'light') {
            light = true;
        }
        localStorage.setItem('light', light.toString());
    }
}

function switchMode() {
    var bc = $('body').toggleClass('light')[0].className;
    if (bc == '') {
        bc = 'dark';
    }
    $('#switch-mobile').html('<i class="far fa-' + mm[bc].m + '"></i>');
    $('#switch-desktop').html('<i class="far fa-' + mm[bc].m + '"></i> ' + mm[bc].d);
    setTheme();
}