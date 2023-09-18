import React from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Head from '@docusaurus/Head';
import clsx from 'clsx';
import styles from './styles.module.css';


const Bridge = require('@site/static/img/bridge.svg').default;

export default function BridgeAnimation({ size }) {
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

    let bridgeTimeline;
    let bridgePackets = [];
    function bridgeAnimationStart(size) {
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
        draw.size(size);
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

    if (ExecutionEnvironment.canUseDOM) {
        setTimeout(() => {
            if (!!document.getElementById('gefyra-bridge')) {
                bridgeAnimationStart(size);
            }
        },
        1000);
    }

    return (
        <div>
            <Head>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/svg.js/3.1.2/svg.min.js"></script>
            </Head>
            <figure className={clsx(styles.sectionFigure)}>
                <Bridge />
            </figure>
        </div>
    );
}