package com.meerkat.api.controllers;

import com.meerkat.api.dtos.StartStreamMessageDto;
import com.meerkat.api.models.StreamStartMessage;
import org.springframework.stereotype.Controller;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;

@Controller
public class MessageSignalController {
    @MessageMapping("/streams")
    @SendTo("/topic/room/{roomId}")
    public StreamStartMessage signalStreamStart(StartStreamMessageDto dto){
        return new StreamStartMessage(dto.getStreamId());
    }
}
