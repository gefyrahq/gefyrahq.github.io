import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

function animatePacket(packet, delay, reverse, path, timeline) {
    packet.timeline(timeline);
    packet.animate(2000, delay, 'now')
        .ease('<>')
        .loop(true, false).during(function (pos, morph, eased) {
            var p;
            if (reverse) {
                p = path.pointAt(path.length() - pos * path.length());
            } else {
                p = path.pointAt(pos * path.length());
            }
            packet.move(p.x - packet.width() / 2, p.y - packet.height() / 2);
        }).queue(function () {
            packet.attr('opacity', 1);
        });
}


function restartAnimation(timeline) {
    timeline.time(0);
    timeline.play()
}


let runTimeline;
const runPackets = [];
function runAnimationStart() {
    const clusterElements = [
        "g1897",
        "auth-service",
        "path1907_1_",
        "path31015",
        "g1923",
        "g37910",
        "g37916",
        "text1927",
        "text1931",
        "st122",
        "path24639",
        "path2013",
        "path2011",
    ];

    const runArrow = [
        "path1999",
        "path2001",
        "path8643",
    ];

    const applicationWindow = [
        "g1851",
        "g1841",
        "path1831",
        "path1829",
        "path1827",
        "path1825",
        "path1823",
    ];

    const dockerContainer = [
        "g1881"
    ];

    const projectedContainer = [
        "path293564_1_",
        "path293562_1_",
    ];

    const catService = [
        "g293578_1_"
    ];

    const operator = [
        "path1909",
        "path1907",
        "path1903",
        "path1901",
        "path1899",
        "path1887",
        "path2003",
        "path2005",
        "path2009",
        "path2007",
        "path24326",
    ];

    const draw = SVG('#gefyra-run');
    draw.size(800);

    runTimeline = runTimeline ? runTimeline : new SVG.Timeline();
    runTimeline.stop();


    const cluster = draw.find(clusterElements.map(e => "#" + e).join());
    const arrow = draw.find(runArrow.map(e => "#" + e).join());
    const appWindow = draw.find(applicationWindow.map(e => "#" + e).join());
    const container = draw.find(dockerContainer.map(e => "#" + e).join());
    const projected = draw.find(projectedContainer.map(e => "#" + e).join());
    const gefyraOp = draw.find(operator.map(e => "#" + e).join());
    const cat = draw.find(catService.map(e => "#" + e).join());

    const textCheck = document.getElementById("run-text");
    if (textCheck) textCheck.remove();

    const text = draw.text("Start IDE").attr("id", "run-text")
        .font({ size: 100, color: 'black', family: 'system-ui,-apple-system,BlinkMacSystemFont,"Modern Sans","Open Sans","Helvetica Neue",Arial,sans-serif' })
        .move(0, 2000);

    if (runPackets.length) {
        for (let i = 0; i < runPackets.length; i++) {
            runPackets[i].remove();
        }
    }

    const data = draw.findOne('#packet');
    const data2 = data.clone();
    runPackets.push(data2);
    const data3 = data.clone();
    runPackets.push(data3);
    const data4 = data.clone();
    runPackets.push(data4);
    const data5 = data.clone();;
    runPackets.push(data5);
    const data6 = data.clone();
    runPackets.push(data6);
    const data7 = data.clone();
    runPackets.push(data7);
    const data8 = data.clone();
    runPackets.push(data8);
    const data9 = data.clone();
    runPackets.push(data9);
    const data10 = data.clone();
    runPackets.push(data10);
    data2.addTo(draw).attr("class", "packet-marker");
    data3.addTo(draw).attr("class", "packet-marker");
    data4.addTo(draw).attr("class", "packet-marker");
    data5.addTo(draw).attr("class", "packet-marker");
    data6.addTo(draw).attr("class", "packet-marker");
    data7.addTo(draw).attr("class", "packet-marker");
    data8.addTo(draw).attr("class", "packet-marker");
    data9.addTo(draw).attr("class", "packet-marker");
    data10.addTo(draw).attr("class", "packet-marker");

    cluster.attr('opacity', 0);
    arrow.attr('opacity', 0);
    appWindow.attr('opacity', 0);
    container.attr('opacity', 0);
    projected.attr('opacity', 0);
    gefyraOp.attr('opacity', 0);
    data.attr('opacity', 0);
    data2.attr('opacity', 0);
    data3.attr('opacity', 0);
    data4.attr('opacity', 0);
    data5.attr('opacity', 0);
    data6.attr('opacity', 0);
    data7.attr('opacity', 0);
    data8.attr('opacity', 0);
    data9.attr('opacity', 0);
    data10.attr('opacity', 0);

    cluster.timeline(runTimeline);
    arrow.timeline(runTimeline);
    appWindow.timeline(runTimeline);
    container.timeline(runTimeline);
    text.timeline(runTimeline);
    gefyraOp.timeline(runTimeline);

    /* Text animation */
    text.animate(100, 4500, 'now').attr('opacity', 0).after(function () {
        text.text("Connect to Kubernetes ...");
        text.animate(100, 100, 'now').attr('opacity', 1);
    });
    text.animate(100, 6500, 'now').attr('opacity', 0).after(function () {
        text.text("... install Gefyra cluster side components ...");
        text.animate(100, 100, 'now').attr('opacity', 1);
    });
    text.animate(100, 10500, 'now').attr('opacity', 0).after(function () {
        text.text("... run container locally");
        text.animate(100, 100, 'now').attr('opacity', 1);
    });
    text.animate(100, 12500, 'now').attr('opacity', 0).after(function () {
        text.text("Done!");
        text.animate(100, 100, 'now').attr('opacity', 1);
    });
    text.animate(100, 15500, 'now').attr('opacity', 0).after(function () {
        text.text("Your local container is\n connected to the Kubernetes cluster.");
        text.animate(100, 100, 'now').attr('opacity', 1);
    });

    appWindow.animate(0, 0, 'now').dmove(0, 30);
    appWindow.animate(1000, 1000, 'now').attr('opacity', 1).dmove(0, -30).queue();

    const clusterMove = 15;

    cluster.animate(0, 0, 'now').dmove(0, clusterMove);
    cluster.animate(1000, 5000, 'now').attr('opacity', 1).dmove(0, -clusterMove);

    gefyraOp.animate(0, 0, 'now').dmove(0, 30);
    gefyraOp.animate(1000, 7000, 'now').attr('opacity', 1).dmove(0, -30);

    arrow.animate(1000, 8000, 'now').attr('opacity', 1);

    const containerMove = 15;

    container.animate(0, 0, 'now').dmove(0, containerMove);
    container.animate(1000, 10000, 'now').attr('opacity', 1).dmove(0, -containerMove);

    projected.animate(1000, 10000, 'now').attr('opacity', 1);

    const path = draw.findOne('#packet-path');
    const path2 = draw.findOne('#path1887');


    animatePacket(data, 11000, false, path, runTimeline);
    animatePacket(data2, 11200, false, path, runTimeline);
    animatePacket(data3, 11400, false, path, runTimeline);
    animatePacket(data4, 12000, true, path, runTimeline);
    animatePacket(data5, 13200, true, path, runTimeline);

    animatePacket(data6, 11100, false, path2, runTimeline);
    animatePacket(data7, 11300, false, path2, runTimeline);
    animatePacket(data8, 11500, false, path2, runTimeline);
    animatePacket(data9, 11900, true, path2, runTimeline);
    animatePacket(data10, 12200, true, path2, runTimeline);
}


let bridgeTimeline;
let bridgePackets = [];
function bridgeAnimationStart() {
    const clusterElements = [
        "g54022_1_",
        "path31015",
        "g37910",
        "g37916",
    ];

    const runArrow = [
        "path1999",
        "path2001",
        "path8643",
    ];

    const applicationWindow = [
        "g1851",
        "g1841",
        "path1831",
        "path1829",
        "path1827",
        "path1825",
        "path1823",
    ];

    const dockerContainer = [
        "g1881"
    ];

    const projectedContainer = [
        "path293564_1_",
        "path293562_1_",
    ];

    const catService = [
        "g293578_1_"
    ];

    const draw = SVG('#gefyra-bridge');
    draw.size(800);
    bridgeTimeline = bridgeTimeline ? bridgeTimeline : new SVG.Timeline();
    bridgeTimeline.stop();


    const cluster = draw.find(clusterElements.map(e => "#" + e).join());
    const arrow = draw.find(runArrow.map(e => "#" + e).join());
    const appWindow = draw.find(applicationWindow.map(e => "#" + e).join());
    const container = draw.find(dockerContainer.map(e => "#" + e).join());
    const projected = draw.find(projectedContainer.map(e => "#" + e).join());
    const cat = draw.find(catService.map(e => "#" + e).join());


    const textCheck = document.getElementById("bridge-text");
    if (textCheck) textCheck.remove();

    const text = draw.text("Start IDE").attr("id", "bridge-text")
        .font({ size: 100, color: 'black', family: 'system-ui,-apple-system,BlinkMacSystemFont,"Modern Sans","Open Sans","Helvetica Neue",Arial,sans-serif' })
        .move(0, 2100);


    if (bridgePackets.length) {
        for (let i = 0; i < bridgePackets.length; i++) {
            bridgePackets[i].remove();
        }
    }

    const data = draw.findOne('#packet');
    const data2 = data.clone();
    bridgePackets.push(data2);
    const data3 = data.clone();
    bridgePackets.push(data3);
    const data4 = data.clone();
    bridgePackets.push(data4);
    const data5 = data.clone();
    bridgePackets.push(data5);
    data2.addTo(draw).attr("class", "packet-marker");
    data3.addTo(draw).attr("class", "packet-marker");
    data4.addTo(draw).attr("class", "packet-marker");
    data5.addTo(draw).attr("class", "packet-marker");

    cluster.attr('opacity', 0);
    arrow.attr('opacity', 0);
    appWindow.attr('opacity', 0);
    container.attr('opacity', 0);
    projected.attr('opacity', 0);
    data.attr('opacity', 0);
    data2.attr('opacity', 0);
    data3.attr('opacity', 0);
    data4.attr('opacity', 0);
    data5.attr('opacity', 0);


    cluster.timeline(bridgeTimeline);
    arrow.timeline(bridgeTimeline);
    appWindow.timeline(bridgeTimeline);
    container.timeline(bridgeTimeline);
    text.timeline(bridgeTimeline);

    /* Text animation */
    text.animate(100, 2500, 'now').attr('opacity', 0).after(function () {
        text.text("Spin up local container ...");
        text.animate(100, 100, 'now').attr('opacity', 1);
    });
    text.animate(100, 4500, 'now').attr('opacity', 0).after(function () {
        text.text("... connect to Kubernetes ...");
        text.animate(100, 100, 'now').attr('opacity', 1);
    });
    text.animate(100, 8500, 'now').attr('opacity', 0).after(function () {
        text.text("... bridge container (as Cat service)");
        text.animate(100, 100, 'now').attr('opacity', 1);
    });
    text.animate(100, 10500, 'now').attr('opacity', 0).after(function () {
        text.text("Done!");
        text.animate(100, 100, 'now').attr('opacity', 1);
    });
    text.animate(100, 13500, 'now').attr('opacity', 0).after(function () {
        text.text("Your local container now acts \n as if it was the chosen service within Kubernetes.");
        text.animate(100, 100, 'now').attr('opacity', 1);
    });

    appWindow.animate(0, 0, 'now').dmove(0, 30);
    appWindow.animate(1000, 1000, 'now').attr('opacity', 1).dmove(0, -30).queue();

    const containerMove = 15;

    container.animate(0, 0, 'now').dmove(0, containerMove);
    container.animate(1000, 3000, 'now').attr('opacity', 1).dmove(0, -containerMove);
    ;
    const clusterMove = 15;
    ;
    cluster.animate(0, 0, 'now').dmove(0, clusterMove);
    cluster.animate(1000, 5000, 'now').attr('opacity', 1).dmove(0, -clusterMove);

    arrow.animate(1000, 7000, 'now').attr('opacity', 1);

    projected.animate(1000, 9000, 'now').attr('opacity', 1);

    const path = draw.findOne('#packet-path');

    animatePacket(data, 11000, false, path, bridgeTimeline);
    animatePacket(data2, 11200, false, path, bridgeTimeline);
    animatePacket(data3, 11400, false, path, bridgeTimeline);
    animatePacket(data4, 12000, true, path, bridgeTimeline);
    animatePacket(data5, 13200, true, path, bridgeTimeline);

};

function startAnimations() {
    if (!window.SVG) {
        setTimeout(startAnimations, 500);
    } else {
        runAnimationStart();
        bridgeAnimationStart();
    }
}

if (ExecutionEnvironment.canUseDOM) {
    startAnimations();
}