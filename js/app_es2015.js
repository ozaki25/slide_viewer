+(($) => {

    class SlideViewer {
        constructor(element) {
            this.$element = $(element)
            this.$slides = this.$element.children('.slide-image')
            this.current = 0

            this.showToolbar()
            this.change()
        }

        showToolbar() {
            const toolbar = $('<div>').addClass('toolbar')
            const pager = this.getPagerHtml()
            this.$prev = this.getChangeSlideIconHtml('prev')
            this.$next = this.getChangeSlideIconHtml('next')
            toolbar.append(this.$prev).append(pager).append(this.$next)
            this.$element.append(toolbar)
        }

        getPagerHtml() {
            const pager = $('<div>').addClass('slide-pager')
            this.$currentPage = $('<span>').addClass('current-page')
            this.$totalPage = $('<span>').addClass('total-page')
            return pager.append(this.$currentPage).append(' / ').append(this.$totalPage)
        }

        getChangeSlideIconHtml(direction) {
            const div = $('<div>').addClass('change-slide').addClass(direction).data('direction', direction)
            const icon = $('<span>').addClass(this.getIconClass(direction))
            return div.append(icon)
        }

        getIconClass(direction) {
            return direction === 'prev' ? 'glyphicon glyphicon-chevron-left' :
                   direction === 'next' ? 'glyphicon glyphicon-chevron-right' : ''
        }

        change(direction) {
            const next = this.getNextSlideNum(direction)
            if(this.isOutOfRange(next)) return

            this.current = next
            this.reset()
            this.showSlide()
            this.startOrEndDisabled()
            this.changePageNum()
        }

        getNextSlideNum(direction) {
            return direction === 'prev' ? this.current - 1 :
                   direction === 'next' ? this.current + 1 : this.current
        }

        isOutOfRange(num) {
            return num < 0 || this.$slides.length <= num
        }

        reset() {
            this.$slides.hide().removeClass('active')
            this.$prev.removeClass('disabled')
            this.$next.removeClass('disabled')
        }

        showSlide() {
            const $slide = $(this.$slides.get(this.current))
            $slide.show().addClass('active')
        }

        startOrEndDisabled() {
            if(this.current === 0) this.$prev.addClass('disabled')
            if(this.current === this.$slides.length - 1) this.$next.addClass('disabled')
        }

        changePageNum() {
            this.$currentPage.text(this.current + 1)
            this.$totalPage.text(this.$slides.length)
        }

        static jQueryInterface(option) {
            return this.each(function() {
                const $this = $(this)
                let data = $this.data('slide-viewer')
                if(!data) {
                    data = new SlideViewer(this, option)
                    $this.data('slide-viewer', data)
                }
                if(option && option.change) data.change(option.change)
            })
        }
    }

    $(document).on('click', '.change-slide', function() {
        const $this = $(this)
        const $target = $this.closest('.slide-images')
        const option = { change: $this.data('direction') }
        SlideViewer.jQueryInterface.call($target, option)
    })

    $.fn.slideViewer = SlideViewer.jQueryInterface
    $.fn.slideViewer.Constructor = SlideViewer
    $.fn.slideViewer.noConflict = () => {
        $.fn.slideViewer = $.fn.slideViewer
        return SlideViewer.jQueryInterface
    }

    $(() => $('.slide-images').slideViewer())

    return SlideViewer

})(jQuery);
