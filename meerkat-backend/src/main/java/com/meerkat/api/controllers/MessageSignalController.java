package com.meerkat.api.controllers;

import com.meerkat.api.models.StreamMessage;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.stereotype.Controller;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;

@Controller
public class MessageSignalController {
    @MessageMapping("/streams/start")
    @SendTo("/topic/rooms/{streamId}")
    public StreamMessage signalStreamStart(@DestinationVariable String streamId){
        return new StreamMessage(streamId, "start stream");
    }

    @MessageMapping("/streams/stop")
    @SendTo("/topic/rooms/{streamId}")
    public StreamMessage signalStreamStop(@DestinationVariable String streamId) {
        return new StreamMessage(streamId, "stop stream");
    }
}
